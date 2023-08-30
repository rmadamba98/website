import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function Photo(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
    });
    const style = {
        transform: CSS.Transform.toString(transform),
    };
    return (
        <div
            className="rm__photo"
            ref={setNodeRef}
            style={{ ...style, ...props.styles }}
            {...listeners}
            {...attributes}
        >
            {props.image}
        </div>
    );
}

export default Photo;
