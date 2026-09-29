interface User {
  id: string;
  authenticated: boolean;
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
  };
}

export const _user: User = {
  id: "1",
  authenticated: true,
  userInfo: {
    firstName: "Thanh",
    lastName: "Nguyen",
    email: "thanh_dev_web@example.com",
    avatar: "https://via.placeholder.com/150",
  },
};
