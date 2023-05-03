import React from "react";

import {
    View, Text, StyleSheet, Button,
    ImageBackground, TouchableOpacity, Animated, Keyboard
} from 'react-native';
import Video from 'react-native-video';
import { COLORS, SIZES, FONTS, icons, constants, dummyData } from '../../constants';
import { LineDivider, IconDivider, IconButton } from "../../components";

const CourseDetails = ({ navigation, route }) => {

    const { selectedCourse } = route.params;
    const [playVideo, setPlayVideo] = React.useState(false);
    function renderVideoSection() {
        return (
            <View style={{
                height: SIZES.height > 800 ? 220 : 200,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.gray90
            }} >

                {/* Thumbnail */}
                <ImageBackground
                    source={selectedCourse?.thumbnail}
                    style={{
                        width: "100%",
                        height: "100%",
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >

                    {/* Play Button */}
                    <IconButton
                        icon={icons.play}
                        iconStyle={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.white
                        }}
                        containerStyle={{
                            width: 55,
                            height: 55,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 30,
                            backgroundColor: COLORS.primary,
                            marginTop: SIZES.padding,

                        }}
                        onPress={() => setPlayVideo(true)}
                    />

                </ImageBackground>

                {playVideo &&
                
                    <Video 
                        source={{ uri: 'https://www.youtube.com/watch?v=UBJ-j6Mcbzw'}}
                        controls={true}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            backgroundColor: COLORS.black
                        }}
                    />
                    }
            </View>
        )
    }

    function renderCourseInfoSection() {
        return (
            <View>

            </View>
        )
    }

    function renderHeader() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: SIZES.height > 800 ? 40 : 20,
                    left: 0,
                    right: 0,
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.padding,
                    zIndex: 1
                }}
            >
                {renderHeaderComponents()}
            </View>
        )
    }

    function renderHeaderComponents() {
        return(
            <>
                {/* Back */}
                <View 
                style={{
                    flex: 1,
                }}
                >
                    <IconButton 
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 20,
                            backgroundColor: COLORS.white
                        }}
                        iconStyle={{
                            width:25,
                            height:25,
                            tintColor:COLORS.black
                        }}
                        onPress={() => navigation.goBack()}
                    />

                </View>


                {/* Share & Favourite */}
                <View 
                style={{
                    flexDirection: 'row',
                }}
                >
                    <IconButton 
                        icon={icons.media}
                        containerStyle={{
                            width: 50,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        iconStyle={{
                            tintColor: COLORS.white
                        }}
                    />

                    <IconButton
                        icon={icons.favourite_outline}
                        containerStyle={{
                            width: 50,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        iconStyle={{
                            tintColor: COLORS.white
                        }}
                    />

                </View>
            </>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >


            {/* Header Bar */}
            {renderHeader()}

            {/* Video */}
            {renderVideoSection()}

        </View>
    )
}

export default CourseDetails;