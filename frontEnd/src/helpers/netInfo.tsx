import NetInfo from '@react-native-community/netinfo';


export const userIsConnected = async () => {
    try {
        const state = await NetInfo.fetch()
        return state.isInternetReachable
    } catch (e) {
        return false
    }

}
