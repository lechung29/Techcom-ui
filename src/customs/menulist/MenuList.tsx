import { Button } from '@/common/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/common/dropdown-menu'
import React from 'react'
import "./index.scss"
import { useControllableState } from "@chakra-ui/react-use-controllable-state"

export type IButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"

export interface IMenuListItemProps {
    label: string,
    value: string
}

export interface IMenuListProps {
    isOpen: boolean;
    onChangeOpen: (value: boolean) => void
    buttonLabel: string;
    buttonClassName?: string;
    variant?: IButtonVariant;
    dropdownClassName?: string;
    dropdownValue: string
    onChangeValue: (value: string) => void
    options: IMenuListItemProps[]
    dropdownIcon?: JSX.Element
}

export const MenuList: React.FunctionComponent<IMenuListProps> = (props) => {
    const { dropdownValue, onChangeValue, options, buttonLabel, variant, buttonClassName, dropdownClassName, dropdownIcon, isOpen, onChangeOpen } = props
    const [internalOpen, setInternalOpen] = useControllableState<boolean>({
        defaultValue: false,
        value: isOpen,
        onChange: onChangeOpen
    })
    const[internalValue, setInternalValue] = useControllableState<string>({
        value: dropdownValue,
        onChange: onChangeValue
    })
    return (
        <DropdownMenu open={internalOpen} onOpenChange={setInternalOpen}>
            <DropdownMenuTrigger asChild>
                <Button className={buttonClassName} variant={variant}>
                    <span>{buttonLabel}</span>
                    {dropdownIcon}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={dropdownClassName}>
                <DropdownMenuRadioGroup value={internalValue} onValueChange={setInternalValue}>
                    {options.map((option, key) => (
                        <DropdownMenuRadioItem className='tc-common-menulist-item' key={key} value={option.value}>{option.label}</DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
