import { useAuth } from '@clerk/expo'
import {Href, Redirect, Stack} from 'expo-router'

export default function Layout() {
    const { isSignedIn, isLoaded } = useAuth()

    if (!isLoaded) {
        return null
    }

    if (!isSignedIn) {
        return <Redirect href={"/(auth)/sign-up" as Href} />
    }

    return <Stack />
}