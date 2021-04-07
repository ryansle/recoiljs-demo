import { atom, selector } from "recoil";

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

const attendees = [
  {
    name: "Ryan Le",
    email: "ryanle@live.com",
    status: "Attending",
  },
  {
    name: "Jessie Guo",
    email: "jessguo@gmail.com",
    status: "Attending",
  },
  {
    name: "Liv Roers",
    email: "livroers@gmail.com",
    status: "Not Attending",
  },
  {
    name: "Sam Jacobson",
    email: "sammyboy2018@gmail.com",
    status: "Not Attending",
  },
  {
    name: "Elizabeth Cloyed",
    email: "liz@cloyed.com",
    status: "Attending",
  },
  {
    name: "Jake Petersen",
    email: "jpetersen6202@gmail.com",
    status: "Attending",
  },
];

const attendeeListState = atom({
  key: "attendeeListState",
  default: attendees,
});

const attendeeFilterState = atom({
  key: "attendeeFilterState",
  default: "Show All",
});

const filteredAttendeeListState = selector({
  key: "filteredAttendeeListState",
  get: ({ get }) => {
    const filter = get(attendeeFilterState);
    const list = get(attendeeListState);

    switch (filter) {
      case "Show Attending":
        return list.filter((item) => item.status === "Attending");
      case "Show Not Attending":
        return list.filter((item) => item.status === "Not Attending");
      default:
        return list;
    }
  },
});

const attendeeListStatsState = selector({
  key: "attendeeListStatsState",
  get: ({ get }) => {
    const list = get(attendeeListState);
    const totalInvitees = list.length;
    const numAttending = list.filter((item) => item.status === "Attending")
      .length;
    const numNotAttending = list.filter(
      (item) => item.status === "Not Attending"
    ).length;
    const percentageAttending = numAttending / totalInvitees;
    const percentageNotAttending = 1 - percentageAttending;

    return {
      totalInvitees,
      numAttending,
      numNotAttending,
      percentageAttending,
      percentageNotAttending,
    };
  },
});

export {
  fields,
  current,
  attendeeFilterState,
  filteredAttendeeListState,
  attendeeListStatsState,
};
