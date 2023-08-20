import { OTP_LENGTH } from "./constants";

export const ScreenTextEn = {
  AuthSigninAndupId: {
    screenHeader: "Enter verification Code",
    screenDescription:
      "We have sent you a 4 digit verification code on the given mobile number.",
  },
  AuthConfirmOTP: {
    screenHeader: "Enter verification Code",
    screenDescription:
      "We have sent you a 4 digit verification code on the given mobile number.",
    errorLength: "OTP must have " + OTP_LENGTH + " digits",
  },
  General: {
    tileElapsed: "Time elapsed",
    resendCode: "Resend Code",
  },
};
