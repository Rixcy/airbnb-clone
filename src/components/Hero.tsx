import React from "react"

export const Hero: React.VFC = () => {
    return (
        <div className="hero h-[600px]">
            <div className="relative">
                <div className="h-full w-full bg-cover">
                    <picture>
                        <source
                            srcSet="https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=2560 1x, https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=2560 2x"
                            media="(min-width: 1440px)"
                        />
                        <source
                            srcSet="https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=960 1x, https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=1920 2x"
                            media="(min-width: 950px)"
                        />
                        <source
                            srcSet="https://a0.muscache.com/im/pictures/4e9fc041-1c7e-4f2d-b2bd-52c9cdc6a512.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/4e9fc041-1c7e-4f2d-b2bd-52c9cdc6a512.jpg?im_w=1440 2x"
                            media="(min-width: 744px)"
                        />
                        <source srcSet="https://a0.muscache.com/im/pictures/b65bef33-07be-4c55-b613-bb990193e8f6.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/b65bef33-07be-4c55-b613-bb990193e8f6.jpg?im_w=720 2x" />
                        <img
                            className="absolute object-cover align-bottom w-full max-h-[600px]"
                            aria-hidden="true"
                            alt=""
                            src="https://a0.muscache.com/im/pictures/b65bef33-07be-4c55-b613-bb990193e8f6.jpg?im_q=highq&amp;im_w=720"
                        />
                    </picture>
                </div>

                <div className="max-w-md relative flex flex-col justify-center min-h-[500px] pt-[146px] px-8 md:px-16 pb-8">
                    <h1
                        className="text-6xl line mb-2 font-bold whitespace-pre-line"
                        style={{ maxWidth: "300px" }}
                    >
                        The Greatest Outdoors
                    </h1>
                    <h2 className="mb-2 text-xl">
                        Wishlists curated by Airbnb.
                    </h2>
                    <button
                        type="button"
                        className="px-4 bg-black text-white py-2 rounded-lg max-w-max"
                    >
                        Get inspired
                    </button>
                </div>
            </div>
        </div>
    )
}
