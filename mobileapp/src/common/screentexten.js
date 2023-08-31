import { OTP_LENGTH } from "./constants";

export const ScreenTextEn = {
  AuthSigninAndupId: {
    screenHeader: "",
    screenDescription: "",
  },
  AuthConfirmOTP: {
    screenHeader: "Enter verification Code",
    screenDescription:
      "We have sent you a 4 digit verification code on the given mobile number.",
    errorLength: "OTP must have " + OTP_LENGTH + " digits",
  },
  AuthSignInPassword: {
    screenHeader: "Enter Password",
    screenDescription: "Please enter password you have set.",
  },
  AuthSignupPasswordAndOTP: {
    screenHeader: "Enter password and OTP received on your email entered.",
  },
  SelectUserType: {
    screenTitle: "",
  },
  General: {
    tileElapsed: "Time elapsed",
    resendCode: "Resend Code",
    signInAs: "Sign In As",
    signInAsDescription: "Please select how you want to sign in",
    clientTitle: "Client",
    vendorTitle: "Vendor",
    contactNumber: "Contact Number",
    addressLine1: "Address Line 1",
    addressLine2: "Address Line 2",
    addressLine3: "Address Line 3",
    city: "City",
    state: "State",
    pinCode: "Pin code",
  },
  VendorProfile: {
    editScreenTitle:
      "Please add details about your/shop/services location. This will help you to get service requests from nearby locations.",
    name: "Your or Shop name",
  },
  Location: {
    unknownLocation: "Unknown Location",
    enterCompleteAddress: "Enter Complete Address",
    separator: ", ",
    searchPlaceholder: "Search for area, street name...",
  },
};

export const TextLang = {
  en: ScreenTextEn,
};
