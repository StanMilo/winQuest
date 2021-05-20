function login(email, password) {
  const fakeUser = {
    email: "user@fake.com",
    password: "password",
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email != fakeUser.email || password != fakeUser.password) {
        reject("Wrong email or password. Guess again");
        return;
      }

      resolve(true);
    }, 2500);
  });
}

export const userService = {
  login,
};
