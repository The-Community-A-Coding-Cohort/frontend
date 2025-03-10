import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "../hooks/useInfoModal";
import useMovie from "../hooks/useMovie";

interface InfoModalProps {
    visible?: boolean;
    onClose: any;
}
const InfoModal: React.FC<InfoModalProps> = (props: InfoModalProps) => {
    const [isVisible, setIsVisible] = useState(!!props.visible);

    const { movieId } = useInfoModal();
    const { data = {} } = useMovie(movieId);

    
}