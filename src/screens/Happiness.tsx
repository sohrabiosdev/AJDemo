import LinearGradient from "react-native-linear-gradient";
import React, { useEffect, useState } from "react";
import { AppIcon } from "../lib/IconUtils";
import { Icons } from "../icons/common";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useForceUpdate from "use-force-update";
import LottieView from "lottie-react-native";
import { styles } from "./styles";
import { getHappinessCount, getHappinessDate, setHappinessCount, setHappinessDate } from "../lib/user";

const maxFeedbackAllowed = 2;
const values = [{id: 1, name: "happy_face", isSelected: false}, { id: 2, name: "neutral_face", isSelected: false }, {id: 3, name: "sad_face", isSelected: false}]

// Happiness Component - shows the feedback faces and receive the input from the user.
// Logic for maximum feedbacks integrated in this component.
export const Happiness = () => {
    const [faces, setFaces] = useState(values);
    const [showFace, setShowFace] = useState(true);
    const [showMaxCount, setMaxCount] = useState(false);
    const forceUpdate = useForceUpdate();

    const handleOnFacePressed = (selFace) => {
        if (getHappinessCount() === maxFeedbackAllowed) {
            setMaxCount(true);
        } else {
            faces.map((face) => {
                face.isSelected = face === selFace;
                setShowFace(false)
            });
            setFaces(faces);
            setMaxCount(false);
            setHappinessCount(getHappinessCount() + 1);
            forceUpdate();
        }
    }

    const handleOnClosePressed = () => {
    }

    useEffect(() => {
        checkDateAndResetCounter();
    })

    const checkDateAndResetCounter = () => {
        const difference = Date.now() - getHappinessDate();
        const daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
        if (daysDifference > 0) {
            setHappinessDate(Date.now());
            setHappinessCount(0);
        }
    }

    return (
        <View style={{flex: 1}}>
            <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                            locations={[0, 0.5, 0.6]}
                            colors={["#87CEEB", "#0BB5FF"]}
                            style={{
                                flex: 1,

                            }}>
                <CloseButton onClosePressed={handleOnClosePressed}/>
                <View style={{flex: 1}}/>
                {showFace && <View style={styles.face_container}>
                    {faces.map((face) => {
                        return <Face type={face} onFacePressed={handleOnFacePressed}/>
                    })}
                </View>}
                {showMaxCount && <View style={styles.max_count}>
                    <Text numberOfLines={2} style={{fontWeight: "700", fontSize: 15, color: "white", marginTop: 20, paddingHorizontal: 60,
                    textAlign: "center"}}>You have already given maximum feedback for a day.</Text>
                </View>}
                <View style={{height: 10}}/>
                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    {faces.map((face) => {
                        if (face.isSelected) {
                            return <View style={styles.center}>
                                <LottieView resizeMode={"contain"} source={require('../../assets/success0.json')}
                                            autoPlay={true} loop={false} style={{height: 150}}/>
                                <Text style={styles.title_thankyou}>Thankyou
                                    for providing your feedback.</Text>
                            </View>
                        } else {
                            return <View/>
                        }
                    })}
                </View>
                <View style={{flex: 1}}/>
            </LinearGradient>
        </View>
    )
}

// Face Component - Renders the type of face based upon the props
export const Face = (props) => {
    const {type, onFacePressed} = props;
    const handlePress = () => {
        onFacePressed(props.type);
    }
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.face}>
                <AppIcon
                    name={type.isSelected ? type.name + "_sel" : type.name}
                    color={"white"}
                    provider={Icons}
                    size={40}/>
            </View>
        </TouchableOpacity>
    )
}

// CloseButton Component - Renders the close button
export const CloseButton = (props) => {
    const {onClosePressed} = props;
    const handlePress = () => {
        onClosePressed();
    }
    return (
        <TouchableOpacity style={{marginTop: 50, marginLeft: 10}} onPress={handlePress}>
            <AppIcon
                name={"close"}
                color={"white"}
                provider={Icons}
                size={20}/>
        </TouchableOpacity>
    )
}
