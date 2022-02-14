import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import closeCircleFillSvg from '../assets/images/icons/close-circle-fill.svg';
import s from "./VideoGrid.module.scss";

export default function VideoGrid({
    videos,
}) {
    const [overlayVideo, setOverlayVideo] = useState(null);

    return (
        <div id={s.videoGrid}>
            {overlayVideo !== null && (
                <VideoOverlay
                    videoId={overlayVideo.videoId}
                    videoType={overlayVideo.videoType}
                    onClose={() => setOverlayVideo(null)}
                />
            )}

            {videos.map(v => (
                <div
                    className={s.video}
                    onClick={() => {
                        const type = v.vimeoVideoID ? 'vimeo' : 'youtube';
                        const ID = v.vimeoVideoID || v.youtubeVideoID;
                        setOverlayVideo({
                            videoId: ID,
                            videoType: type,
                        });
                    }}
                >
                    {v.vimeoVideoID && (
                        <div
                            className={s.videoContent}
                            dangerouslySetInnerHTML={{
                                __html: `<iframe src="https://player.vimeo.com/video/${v.vimeoVideoID}?h=9cf95c3674&portrait=0" style="position:absolute;left:0;top:0;transform:translateX(-25%) translateY(-25%);width:200%;height:200%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>`,
                            }}
                        />
                    )}

                    {v.youtubeVideoID && (
                        <div className={s.videoContentImage}>
                            <img
                                src={`https://i2.ytimg.com/vi/${v.youtubeVideoID}/sddefault.jpg`}
                            />
                        </div>
                    )}

                    {v.title && (
                        <p className={s.videoTitle}>
                            {v.title}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}


function VideoOverlay({
    onClose,
    videoId,
    videoType,
}) {
    return (
        createPortal(
            <div id={s.videoOverlay} onClick={onClose}>
                <div id={s.closeOverlay}>
                    <img
                        id={s.closeOverlayImg}
                        src={closeCircleFillSvg}
                        alt="close"
                    />
                </div>


                {videoType === 'youtube' && (
                    <div id={s.videoOverlayContent}>
                        <iframe
                            height="100%"
                            width="100%"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            allowfullscreen
                        ></iframe>
                    </div>
                )}

                {videoType === 'vimeo' && (
                    <div
                        id={s.videoOverlayContent}
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://player.vimeo.com/video/${videoId}?h=9cf95c3674&portrait=0&autoplay=1" style="width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>`,
                        }}
                    />
                )}
            </div>,
            document.body,
        )
    )
}