using System.ComponentModel;

namespace Hata.Models.Enums
{
    public enum ErrorCode
    {
        None,
        [Description("Invalid Id")]
        InvalidId,
        [Description("Not Found")]
        NotFound,
        [Description("IDs in url and body are different")]
        BodyIdConflict,
        [Description("Invalid model")]
        ValidationError,
        [Description("A duplicate key value violates a unique constraint")]
        UniquenessError,
        [Description("Unauthorized request")]
        Unauthorized,
        [Description("User is denied access to data")]
        AccessDenied,
        [Description("This action not allowed by current logic rules.")]
        NotAllowedByImplementation,
        InternalError,
        [Description("The received foreign key does not match the real one")]
        InvalidForeignKey,
        [Description("The otp code is missing")]
        MissingOtpCode,
        [Description("The otp code is invalid")]
        InvalidOtpCode,
        [Description("Phone and Email is empty")]
        InvalidRegistrationModel,
        [Description("Registration was not succeffull")]
        RegistrationNotSuccess,
        [Description("Failed to set user password")]
        SetPasswordFailed,
        [Description("No such otp code type")]
        OtpCodeCodeTypeNotValid,
        [Description("Expired otp code")]
        OtpCodeExpired,
        [Description("Code is not reclaimed")]
        OtpCodeNotReclaimed,
        [Description("Code is reclaimed but reclaimed not allowed")]
        OtpCodeReclaimedNotAllowed,
        [Description("Code Revoked")]
        OtpCodeRevoked,
        [Description("Wrong code number")]
        OtpCodeWrongCodeNumber,
        [Description("User not found")]
        UserNotFound,
        [Description("Driver not found")]
        DriverNotFound,
        [Description("Client not found")]
        ClientNotFound,
        [Description("Trip not found")]
        TripNotFound,
        [Description("Service unauthorized")]
        ServiceUnauthorized,
        [Description("Email not confimed")]
        EmailNotConfirmed,
        [Description("Phone not confimed")]
        PhoneNotConfirmed,
        [Description("Phone already confimed")]
        PhoneAlreadyConfirmed,
        [Description("Verify email by otp code failed")]
        VerifyEmailFailed,
        [Description("Verify phone by otp code failed")]
        VerifyPhoneFailed,
        [Description("Creation of phone otp code failed")]
        CreateOtpPhoneCodeFailed,
        [Description("Creation of email otp code failed")]
        CreateOtpEmailCodeFailed,
        [Description("Send sms failed")]
        SendSmsFailed,
        [Description("Cannot Update")]
        CannotUpdate,
        [Description("Cannot Add Photo")]
        CannotAddPhoto,
        [Description("User with this phone number already exist")]
        UserAlreadyExist,
        [Description("Trip Already Confirmed")]
        TripAlreadyConfirmed,
    }
}
