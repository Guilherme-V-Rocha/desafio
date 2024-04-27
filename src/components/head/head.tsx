"use client"
import { colors } from "@/styles/colors";
import { Typography } from "../typography/typography";
import { HeadContainer , HeadGap} from "./headBase";
import { Button } from "../button/button";

export function Head() {
    return( 
    <HeadContainer>
        <HeadGap>
            <Typography fontWeight="600" fontSize="40px" color={colors.white} >MKS</Typography>
            <Typography fontWeight="300" fontSize="20px" color={colors.white} alignSelf="end">Sistemas</Typography>   
        </HeadGap>
        <Button text="0" onSubmitAction={() => console.log("oi")}/>
    </HeadContainer>
    )
}