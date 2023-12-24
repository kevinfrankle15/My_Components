import React from 'react';

const SkeletonElementEg = ({
    name,
    shape,
    width,
    height,
    timing,
    attributes,
}) => {
    const switchSkeletonLoaderEg = () => {

        switch (shape) {    //
            case "circle":
                return (
                        `${name}:empty{
                            display: inline-block;
                            width:${width};
                            height:${height};
                            border-radius:50%;
                            background:linear-gradient(
                                to right,
                                rgba(255,255,255,0),
                                rgba(255,255,255,0.5) 50%,
                                rgba(255,255,255,0) 80%
                            ),lightgray;
                            background-size: 50px 200px;
                            background-repeat: repeat-y;
                            background-position: 0 0 ;
                            animation: wave ${timing} infinite;
                            
                        }
                        @keyframes wave{
                            to{
                                background-position: 100% 0;
                            }
                        }`
                        );
            case "rectangle":
                return (
                        `${name}:empty {
                            display: inline-block;
                            width:${width};
                            height:${height};
                            background:linear-gradient(
                                to right,
                                rgba(255,255,255,0),
                                rgba(255,255,255,0.5) 50%,
                                rgba(255,255,255,0) 80%
                            ),lightgray;
                            background-size: 50px 200px;
                            background-repeat: repeat-y;
                            background-position: 0 0 ;
                            animation: wave ${timing} infinite;
                        }
                        @keyframes wave{
                            to{
                                background-position: 100% 0;
                            }
                        }`
                        );
                case "imageCircle":
                    return(
                        `img:not([src])${name}{
                            display: inline-block;
                            width:${width};
                            height:${height};
                            border-radius:50%;
                            background:linear-gradient(
                                to right,
                                rgba(255,255,255,0),
                                rgba(255,255,255,0.5) 50%,
                                rgba(255,255,255,0) 80%
                            ),lightgray;
                            background-size: 50px 200px;
                            background-repeat: repeat-y;
                            background-position: 0 0 ;
                            animation: wave ${timing} infinite;
                        }
                        @keyframes wave{
                            to{
                                background-position: 100% 0;
                            }
                        }`
                    );
                case "imageRectangle":
                    return(
                        `img:not([src])${name}{
                            display: inline-block;
                            width:${width};
                            height:${height};
                            background:linear-gradient(
                                to right,
                                rgba(255,255,255,0),
                                rgba(255,255,255,0.5) 50%,
                                rgba(255,255,255,0) 80%
                            ),lightgray;
                            background-size: 50px 200px;
                            background-repeat: repeat-y;
                            background-position: 0 0 ;
                            animation: wave ${timing} infinite;
                        }
                        @keyframes wave{
                            to{
                                background-position: 100% 0;
                            }
                        }`
                    );
                    default:
                        return (
                            `${name}:empty {
                                display: inline-block;
                                width:${width};
                                height:${height};
                                background:linear-gradient(
                                    to right,
                                    rgba(255,255,255,0),
                                    rgba(255,255,255,0.5) 50%,
                                    rgba(255,255,255,0) 80%
                                ),lightgray;
                                background-size: 50px 200px;
                                background-repeat: repeat-y;
                                background-position: 0 0 ;
                                animation: wave ${timing} infinite;
                            }
                            @keyframes wave{
                                to{
                                    background-position: 100% 0;
                                }
                            }`
                            );
        }
    }
    
return (
    
    switchSkeletonLoaderEg()
)
}
export { SkeletonElementEg };