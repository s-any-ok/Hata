using System.Collections.Generic;
using Hata.Models.Enums;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters; //using FluentValidation.Results;

namespace Hata.Models.ApiWrapper
{
    public class ApiError
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ErrorCode ErrorCode { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public IList<ValidationFailure> ValidationErrors { get; set; }

        public override string ToString()
        {
            return $"ApiError: {nameof(ErrorCode)}: {ErrorCode}, {nameof(ValidationErrors)}: {ValidationErrors}";
        }
    }
}
