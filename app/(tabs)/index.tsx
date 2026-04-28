import "@/global.css"
import { Text, View } from "react-native";
import {Href, Link} from "expo-router";
import {styled} from "nativewind";
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind!
            </Text>
            <Link href="/onboarding" className={"mt-4 rounded-lg text-white bg-primary p-4"}>Go to Onboarding  </Link>
            <Link href={"/(auth)/sign-in" as Href} className={"mt-4 rounded-lg text-white bg-primary p-4"}>Sign in  </Link>
            <Link href={"/(auth)/sign-up" as Href} className={"mt-4 rounded-lg text-white bg-primary p-4"}>Sign up  </Link>
            <Link href={"/subscriptions/spotify" as Href}>Spotify Subscription</Link>
        </SafeAreaView>
    );
}