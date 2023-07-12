import deviceStore, {DeviceStore} from "./DeviceStore"
import userStore, {UserStore} from "./UserStore"

export  type RootStore = {
    userStore:UserStore,
    deviceStore:DeviceStore
}

const rootStore:RootStore = {
    userStore, deviceStore
}

export default rootStore