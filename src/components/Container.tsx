import React, { HTMLAttributes } from "react"
import cx from "classnames"

export type ContainerProps = HTMLAttributes<HTMLDivElement>

export const Container: React.VFC<ContainerProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <div className={cx("max-w-[1760px] mx-auto", className)} {...restProps}>
            {children}
        </div>
    )
}
