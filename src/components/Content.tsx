import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    title1: {
        fontSize: 48,
        fontWeight: "300",
    },
    title2: {
        fontSize: 48,
        fontWeight: "600",
    },
    description: {
        opacity: 0.5,
        fontSize: 16,
    },
});

// This component show the first screen of the app.
interface ContentProps {
    color: string;
    backgroundColor: string;
    source?: number;
    title1: string;
    title2: string;
}

export default ({
                    color,
                    backgroundColor,
                    title1,
                    title2,
                }: ContentProps) => {
    return (
        <View
            style={{
                ...StyleSheet.absoluteFillObject,
                padding: 32,
                backgroundColor,
                alignItems: "center",
                justifyContent: "space-around",
            }}
        >
            <View>
                <Text style={[styles.title1, { color }]}>{title1}</Text>
                <Text style={[styles.title2, { color }]}>{title2}</Text>
                <Text style={[styles.description, { color }]}>
                    Ajman Vision 2021 has been created as per the directives of His Highness Sheikh Humaid bin Rashid Al Nuaimi, Member of the Supreme Council and Ruler of Ajman. The pioneering Vision, closely pursued by H.H Sheikh Ammar bin Humaid Al Nuaimi, Crown Prince of Ajman and Chairman of the Executive Council, is aimed at Building up a happy society that contributes to the development of a green economy, motivated by an excellent government that is consistent with the spirit of the Union, and fully integrating with the federal government strategies and the UAE National Agenda to achieve the UAE Vision 2021.
                </Text>
            </View>
        </View>
    );
};
