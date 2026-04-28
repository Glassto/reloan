import "@/global.css"
import { Text, View } from "react-native";
import {Href, Link} from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind!
            </Text>
            <Link href="/onboarding" className={"mt-4 rounded-xl w-98 text-white text-center bg-primary p-4"}>Go to Onboarding  </Link>
            <Link href={"/(auth)/sign-in" as Href} className={"mt-4 rounded-lg text-white bg-primary p-4"}>Sign in  </Link>
            <Link href={"/(auth)/sign-up" as Href} className={"mt-4 rounded-lg text-white bg-primary p-4"}>Sign up  </Link>
            <Link href={"/subscriptions/spotify" as Href}>Spotify Subscription</Link>
        </View>
    );
}