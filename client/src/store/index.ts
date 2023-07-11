import userStore, {UserStore} from "./UserStore"

export  type RootStore = {
    userStore:UserStore
}

const rootStore:RootStore = {
    userStore
}

export default rootStore