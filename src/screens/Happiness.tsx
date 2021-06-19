import LinearGradient from "react-native-linear-gradient";
import React, {useEffect, useState} from "react";
import {AppIcon} from "../lib/IconUtils";
import {Icons} from "../icons/common";
import {Alert, Text, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import useForceUpdate from "use-force-update";

const values = [{id: 1, name: "happy_face", isSelected: false} , {id: 2, name: "neutral_face", isSelected: false}, {id: 3, name: "sad_face", isSelected: false}]
export const Happiness = () => {
    const [faces, setFaces] = useState(values);
    const forceUpdate = useForceUpdate();

    const handleOnFacePressed = (selFace) => {
        faces.map((face) => {
            face.isSelected = face === selFace;
        });
        setFaces(faces);
        forceUpdate();
    }

    const handleOnClosePressed = () => {
        console.log("Close Pressed")
    }

    useEffect(() => {
        console.log(faces);
    })

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
                <View style={{height: 70, flexDirection: "row", alignItems: "center", alignSelf: "center",
                    justifyContent: "center"}}>
                    {faces.map((face) => {
                        return <Face type={face} onFacePressed={handleOnFacePressed}/>
                    })}
                </View>
                <View style={{height: 10}}/>
                <View style={{  alignItems: "center",
                    justifyContent: "center",}}>
                    {faces.map((face) => {
                        if (face.isSelected) {
                            return <Text style={{fontWeight: "700", fontSize: 15, color: "white"}}>Thankyou for providing your feedback.</Text>
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

export const Face = (props) => {
    const {type, onFacePressed} = props;
    const handlePress = () => {
        onFacePressed(props.type);
    }
    return (
        <TouchableOpacity  onPress={handlePress}>
            <View style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#0BB5FF",
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 10
            }}>
                <AppIcon
                    name={type.isSelected ? type.name + "_sel": type.name}
                    color={"white"}
                    provider={Icons}
                    size={40}/>
            </View>
        </TouchableOpacity>
    )
}

export const CloseButton = (props) => {
    const {onClosePressed} = props;
    const handlePress = () => {
        onClosePressed();
    }
    return (
        <TouchableOpacity  style={{marginTop: 50, marginLeft: 10}} onPress={handlePress}>
            <AppIcon
                name={"close"}
                color={"white"}
                provider={Icons}
                size={20}/>
        </TouchableOpacity>
    )
}
