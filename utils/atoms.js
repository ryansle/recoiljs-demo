import { atom } from "recoil";

const initialFields = {
  email: "",
  name: "",
  phoneNumber: "",
  favoriteColor: "",
  whyFavorite: "",
  pin: "",
};

const fields = atom({
  key: "fields",
  default: initialFields,
});

const current = atom({
  key: "current",
  default: {
    fields,
    complete: false,
  },
});

export { fields, current };
