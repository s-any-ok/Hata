using System;
using Hata.Models.Enums;

namespace Hata.Models.ApiWrapper
{
    public class Response<T> : Response
    {
        public T Value { get; set; }

        public Response<TX> Map<TX>(Func<T, TX> mapper)
        {
            if (this.Success)
            {
                return new Response<TX>
                {
                    Success = true,
                    Value = mapper(this.Value),
                };
            }

            return new Response<TX>
            {
                Success = false,
                Error = this.Error,
            };
        }
    }

    public class Response
    {
        public bool Success { get; set; }
        public ApiError Error { get; set; }

        public static Response<T> Successful<T>(T val)
        {
            return new Response<T> { Success = true, Value = val };
        }

        public static Response<T> OperationFailed<T>(ErrorCode errorCode)
        {
            return new Response<T>
            {
                Success = false,
                Error = new ApiError
                {
                    ErrorCode = errorCode,
                }
            };
        }

        public static Response OperationFailed(ErrorCode errorCode)
        {
            return new Response
            {
                Success = false,
                Error = new ApiError
                {
                    ErrorCode = errorCode,
                }
            };
        }

        public static Response InternalError()
        {
            return new Response
            {
                Success = false,
                Error = new ApiError
                {
                    ErrorCode = ErrorCode.InternalError,
                }
            };
        }

        public static Response<T> InternalError<T>()
        {
            return new Response<T>
            {
                Success = false,
                Error = new ApiError
                {
                    ErrorCode = ErrorCode.InternalError,
                }
            };
        }

        public static Response Successful()
        {
            return new Response
            {
                Success = true,
            };
        }

        // TODO better name
        public Response<X> CastFailed<X>()
        {
            if (!Success)
            {
                return new Response<X> { Success = false, Error = Error };
            }
            throw new InvalidOperationException();
        }
    }

}
