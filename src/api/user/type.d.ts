interface ISendEmail {
  email: string
}

interface IRegisterData {
  phone?: string
  email?: string
  password: string
  emailCode?: string
}

interface IUserLogin {
  phone?: string
  email?: string
  password: string
}

interface IUpdateUserPd {
  password: string
  newPassword: string
}

interface IUserInfo {
  nick?: string
  password?: string
}

export type { ISendEmail, IRegisterData, IUserLogin, IUpdateUserPd, IUserInfo }
