import React from 'react'
import "./index.scss"
import { useControllableState } from "@chakra-ui/react-use-controllable-state"
import { Dropdown, Menu } from "@mui/base"
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { styled } from '@mui/system';
import { classNames } from '@/utils';

export interface IMenuListItemProps {
    label: string,
    value: string
}

export interface IMenuListProps {
    isOpen: boolean;
    onChangeOpen: (value: boolean) => void
    buttonLabel: string;
    buttonClassName?: string;
    dropdownClassName?: string;
    dropdownValue: string
    onChangeValue: (value: string) => void
    options: IMenuListItemProps[]
    dropdownIcon?: JSX.Element
}

export const MenuList: React.FunctionComponent<IMenuListProps> = (props) => {
    const { dropdownValue, onChangeValue, options, buttonLabel, buttonClassName, dropdownClassName, dropdownIcon, isOpen, onChangeOpen } = props
    const [internalOpen, setInternalOpen] = useControllableState<boolean>({
        defaultValue: false,
        value: isOpen,
        onChange: onChangeOpen
    })
    const [internalValue, setInternalValue] = useControllableState<string>({
        value: dropdownValue,
        onChange: onChangeValue
    })
    return (
        <Dropdown open={internalOpen} onOpenChange={(_, value) => setInternalOpen(value)}>
            <MenuButton className={buttonClassName}>
                <span>{buttonLabel}</span>
                {dropdownIcon}
            </MenuButton>
            <Menu className={dropdownClassName} defaultValue={internalValue} slots={{ listbox: Listbox }}>
                {options.map((option, key) => (
                    <MenuItem 
                        key={key}
                        className={classNames('tc-common-menulist-item', { 'tc-common-menulist-item-active': option.value === internalValue})}
                        onClick={() => setInternalValue(option.value)}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </Dropdown>
    )
}

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#99CCF3',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E6',
    700: '#0059B3',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Listbox = styled('ul')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 4px;
    overflow: auto;
    outline: 0;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: 0px 4px 6px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
        };
    z-index: 1;
    `,
);

const MenuItem = styled(BaseMenuItem)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
  
    &:last-of-type {
      border-bottom: none;
    }

    &:active {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${menuItemClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
    `,
);

const MenuButton = styled(BaseMenuButton)(
    ({ theme }) => `
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }
  
    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
    `,
);
