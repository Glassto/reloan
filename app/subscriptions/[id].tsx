import React from 'react';
import { View, Text } from 'react-native';
import {useLocalSearchParams} from "expo-router";

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams()

    return (
        <View>
            <Text>SubscriptionDetails: {id}</Text>
        </View>
    );
};

export default SubscriptionDetails;