import { GoGear } from "react-icons/go";
import { GiTeacher } from "react-icons/gi";
import { BsCarFront } from "react-icons/bs";
import { GiDeskLamp } from "react-icons/gi";
import { PiDesktopTower } from "react-icons/pi";
import { GiGlassCelebration } from "react-icons/gi";
import { PiShirtFoldedLight } from "react-icons/pi";
import { GiHammerNails } from "react-icons/gi";
import { PiHeartHalfDuotone } from "react-icons/pi";
import { BsHouseHeart } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { styled } from "styled-components";


export default function CategoryIcon({ category }) {
    let icon;

    switch (category) {
        case "Assistencia técnica":
            icon = <GoGear size="2em" />;
            break;
        case "Aulas":
            icon = <GiTeacher size="2em" />;
            break;
        case "Automóveis":
            icon = <BsCarFront size="2em" />;
            break;
        case "Consultoria":
            icon = <GiDeskLamp size="2em" />;
            break;
        case "Design e Tecnologia":
            icon = <PiDesktopTower size="2em" />;
            break;
        case "Eventos":
            icon = <GiGlassCelebration size="2.2em" />;
            break;
        case "Moda e Beleza":
            icon = <PiShirtFoldedLight size="2em" />;
            break;
        case "Reformas e Reparos":
            icon = <GiHammerNails size="2em" />;
            break;
        case "Saúde":
            icon = <PiHeartHalfDuotone size="2em" />;
            break;
        case "Serviços domésticos":
            icon = <BsHouseHeart size="2em" />;
            break;
        default:
            icon = <BiCategoryAlt size="2em" />;
    }

    return icon;
}