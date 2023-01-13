using System;
using System.Threading.Tasks;
using Hata.BLL.Abstract.IMapper;
using Hata.BLL.Abstract.IServices;
using Hata.DAL.Abstract.IRepository;
using Hata.Entities;
using Hata.Entities.Enums;
using Hata.Managers.Abstract;
using Hata.Models;
using Hata.Models.ApiWrapper;
using Hata.Models.Enums;
using Hata.Models.Requests;
using Hata.Models.Requests.Auth;
using Hata.Models.Responses;
using Hata.Utils;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Hata.BLL.Impl.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<User> _userManager;
        private readonly IConfiguration _configuration;
        private readonly IUserRepository _userRepository;
        private readonly IImageRepository _imageRepository;
        private readonly IMapper<Image, ImageResponse> _imageResponseMapper;
        private readonly IMapper<User, UserMainInfoResponse> _userMainInfoMapper;
        private readonly IImageManager _imageManager;

        public UserService(
            UserManager<User> userManager,
            IConfiguration configuration,
            IUserRepository userRepository,
            IImageRepository imageRepository, IMapper<Image, ImageResponse> imageResponseMapper,
            IMapper<User, UserMainInfoResponse> userMainInfoMapper, IImageManager imageManager)
        {
            _userManager = userManager;
            _configuration = configuration;
            _userRepository = userRepository;
            _imageRepository = imageRepository;
            _imageResponseMapper = imageResponseMapper;
            _userMainInfoMapper = userMainInfoMapper;
            _imageManager = imageManager;
        }

        public async Task<Response<AuthenticateResponse>> Authenticate(AuthenticateRequest model)
        {
            try
            {
                User user = await _userRepository.GetByUserName(model.UserName);

                if (user == null)
                {
                    return new Response<AuthenticateResponse>()
                    {
                        Success = false,
                        Error = new ApiError() { ErrorCode = ErrorCode.UserNotFound }
                    };
                }
                UserMainInfoResponse userResponse = _userMainInfoMapper.Map(user);
                var token = _configuration.GenerateJwtToken(user);
                AuthenticateResponse result = new AuthenticateResponse(userResponse, token);

                return new Response<AuthenticateResponse>()
                {
                    Success = true,
                    Value = result,
                };
            }
            catch (Exception ex)
            {
                return new Response<AuthenticateResponse>()
                {
                    Success = false,
                    Error = new ApiError() { ErrorCode = ErrorCode.InternalError }
                };
            }
        }

        public async Task<Response<AuthenticateResponse>> Register(AuthenticateRequest model)
        {
            try
            {
                User existUser = await _userManager.FindByNameAsync(model.UserName);
                if (existUser != null)
                {
                    return new Response<AuthenticateResponse>()
                    {
                        Success = false,
                        Error = new ApiError() { ErrorCode = ErrorCode.UserAlreadyExist }
                    };
                }

                User user = new User
                {
                    UserName = model.UserName,
                    PasswordHash = model.Password,
                    JoinedDate = DateTimeOffset.UtcNow,
                };
                IdentityResult result = await _userManager.CreateAsync(user, Guid.NewGuid().ToString() + "A");
                if (result.Succeeded)
                {
                    //await _userRepository.AddAsync(user);
                    return new Response<AuthenticateResponse>()
                    {
                        Success = true,
                    };
                }

                return new Response<AuthenticateResponse>()
                {
                    Success = false,
                    Error = new ApiError() { ErrorCode = ErrorCode.InternalError },
                };
            }
            catch (Exception ex)
            {
                return new Response<AuthenticateResponse>()
                {
                    Success = false,
                    Error = new ApiError() { ErrorCode = ErrorCode.InternalError }
                };
            }
        }


        public async Task<Response> SetUserMainInfo(UserMainInfoRequest userMainInfoRequest, Guid userId)
        {
            try
            {
                User user = await _userRepository.GetByIdAsync(userId);
                if (user == null)
                {
                    return new Response()
                    {
                        Success = false,
                        Error = new ApiError() { ErrorCode = ErrorCode.UserNotFound }
                    };
                }

                if (userMainInfoRequest.BirthDay != null)
                    user.BirthDay = (DateTime)userMainInfoRequest.BirthDay;
                user.University = userMainInfoRequest.University;
                user.Course = userMainInfoRequest.Course;
                user.Faculty = userMainInfoRequest.Faculty;
                if (userMainInfoRequest.UserName != null)
                    user.UserName = userMainInfoRequest.UserName;
                user.Bio = userMainInfoRequest.Bio;
                user.Email = userMainInfoRequest.Email;
                if (userMainInfoRequest.GenderType != null)
                    user.GenderType = (GenderType)userMainInfoRequest.GenderType;

                Response updateResponse = await _userRepository.UpdateAsync(user);
                if (!updateResponse.Success)
                {
                    return new Response()
                    {
                        Success = false,
                        Error = new ApiError() { ErrorCode = ErrorCode.CannotUpdate }
                    };
                }

                return new Response()
                {
                    Success = true,
                };
            }
            catch (Exception ex)
            {
                return new Response()
                {
                    Success = false,
                    Error = new ApiError() { ErrorCode = ErrorCode.InternalError }
                };
            }
        }

        public async Task<Response<UserMainInfoResponse>> GetUserMainInfo(Guid userId)
        {
            try
            {
                User user = await _userRepository.GetByIdAsync(userId);
                if (user == null)
                {
                    return new Response<UserMainInfoResponse>()
                    {
                        Success = false,
                        Error = new ApiError() { ErrorCode = ErrorCode.UserNotFound }
                    };
                }
                UserMainInfoResponse result = _userMainInfoMapper.Map(user);

                return new Response<UserMainInfoResponse>()
                {
                    Success = true,
                    Value = result,
                };
            }
            catch (Exception ex)
            {
                return new Response<UserMainInfoResponse>()
                {
                    Success = false,
                    Error = new ApiError() { ErrorCode = ErrorCode.InternalError }
                };
            }
        }

        public async Task<Response> DeleteUser(Guid userId)
        {
            try
            {
                User user = await _userRepository.GetByIdAsync(userId);
                if (user == null)
                {
                    return new Response()
                    {
                        Success = false,
                        Error = new ApiError() { ErrorCode = ErrorCode.NotFound }
                    };
                }
                await _userRepository.DeleteAsync(user);
                return new Response()
                {
                    Success = true,
                };
            }
            catch (Exception ex)
            {
                return new Response()
                {
                    Success = false,
                    Error = new ApiError() { ErrorCode = ErrorCode.InternalError }
                };
            }
        }

        public async Task<Response<ImageResponse>> GetPhoto(Guid userId)
        {
            try
            {
                User appUser = await _userRepository.GetByIdAsync(userId);
                if (appUser.ImageId == null)
                {
                    return new Response<ImageResponse>()
                    {
                        Success = false,
                        Error = new ApiError() { ErrorCode = ErrorCode.NotFound }
                    };
                }

                Image photo = await _imageRepository.GetByIdAsync((Guid)appUser.ImageId);

                return new Response<ImageResponse>()
                {
                    Success = true,
                    Value = _imageResponseMapper.Map(photo),
                };
            }
            catch (Exception ex)
            {
                return new Response<ImageResponse>()
                {
                    Success = false,
                    Error = new ApiError() { ErrorCode = ErrorCode.InternalError }
                };
            }
        }

        public async Task<Response> UpdatePhoto([FromForm] SaveOrUpdateImageRequest saveOrUpdatePhotoModel, Guid userId)
        {
            try
            {
                User user = await _userRepository.GetByIdAsync(userId);
                if (user.ImageId != null)
                {
                    _imageManager.DeleteImage(saveOrUpdatePhotoModel.ImageName);
                }

                await _imageManager.SaveImage(saveOrUpdatePhotoModel.ImageFile);
                Image image = await _imageRepository.AddAsync(new Image()
                {
                    ImageName = saveOrUpdatePhotoModel.ImageName,
                    ImageFile = saveOrUpdatePhotoModel.ImageFile,
                    ImageSrc = saveOrUpdatePhotoModel.ImageSrc,
                    DateChanged = DateTimeOffset.UtcNow,
                });

                user.ImageId = image.Id;
                Response updateResponse = await _userRepository.UpdateAsync(user);
                if (!updateResponse.Success)
                {
                    return new Response()
                    {
                        Success = false,
                        Error = new ApiError() { ErrorCode = ErrorCode.CannotUpdate }
                    };
                }

                return new Response()
                {
                    Success = true,
                };

            }
            catch (Exception ex)
            {
                return new Response()
                {
                    Success = false,
                    Error = new ApiError() { ErrorCode = ErrorCode.InternalError }
                };
            }
        }

        public async Task<Response> DeletePhoto(Guid userId)
        {
            try
            {
                User appUser = await _userRepository.GetByIdAsync(userId);
                if (appUser.ImageId == null)
                {
                    return new Response()
                    {
                        Success = false,
                        Error = new ApiError() { ErrorCode = ErrorCode.NotFound }
                    };
                }

                Image photo = await _imageRepository.GetByIdAsync((Guid)appUser.ImageId);
                if (photo == null)
                {
                    return new Response()
                    {
                        Success = false,
                        Error = new ApiError() { ErrorCode = ErrorCode.NotFound }
                    };
                }

                await _imageRepository.DeleteAsync(photo);
                _imageManager.DeleteImage(photo.ImageName);
                return new Response()
                {
                    Success = true,
                };
            }
            catch (Exception ex)
            {
                return new Response()
                {
                    Success = false,
                    Error = new ApiError() { ErrorCode = ErrorCode.InternalError }
                };
            }
        }
    }
}
