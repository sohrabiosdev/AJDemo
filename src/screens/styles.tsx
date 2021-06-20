import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    face: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#0BB5FF",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10
    },
    title_thankyou: {
        fontWeight: "700", fontSize: 15, color: "white", marginTop: 20
    },
    center: {
        justifyContent: "center", alignItems: "center"
    },
    max_count: {
        height: 70, flexDirection: "row", alignItems: "center", alignSelf: "center",
        justifyContent: "center"
    },
    face_container: {
        height: 70, flexDirection: "row", alignItems: "center", alignSelf: "center",
        justifyContent: "center"
    }
});
