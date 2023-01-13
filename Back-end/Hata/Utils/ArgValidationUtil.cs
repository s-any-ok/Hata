#nullable enable

using Hata.Utils;
using System;
using System.Diagnostics.CodeAnalysis;

namespace Hata.Utils
{
    public static class ArgValidationUtil
    {

        [return: NotNull]
        public static T FailIfNull<T>(T? value, string paramName)
            where T : class
        {
            if (value == null)
            {
                throw new ArgumentNullException(paramName);
            }

            return value;
        }
    }
}
