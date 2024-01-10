import { KeyboardEventHandler, MouseEventHandler, RefObject, useEffect, useRef } from 'react';
import { ORIENTATIONS, useBooleanState, useKeyboardNavigation } from '@core';

interface UseBreadcrumbsNavigation {
    /** Ссылка на элемент троеточия */
    breadcrumbButtonRef: RefObject<HTMLAnchorElement>;

    /** Ссылка на стек хлебных крошек выпадающего списка */
    dropdownStackRef: RefObject<HTMLDivElement>;

    /** Ссылка на стек хлебных крошек */
    crumbsStackRef: RefObject<HTMLDivElement>;

    /** Состояние видимости выпадающего списка */
    dropdownVisibility: boolean;

    /** Скрывание выпадающего списка */
    hideDropdown(): void;

    /** Обработчик нажатия на кнопку троеточия */
    ellipsisClickHandler: MouseEventHandler<HTMLElement>;

    /** Обработчик нажатия клавиш выпадающего списка */
    dropdownKeysHandler: KeyboardEventHandler<HTMLDivElement>;
}

export const useBreadcrumbsNavigation = (): UseBreadcrumbsNavigation => {
    // REFS
    const breadcrumbButtonRef = useRef<HTMLAnchorElement>(null);
    const dropdownStackRef = useRef<HTMLDivElement>(null);
    const crumbsStackRef = useRef<HTMLDivElement>(null);

    // STATES
    const [dropdownVisibility, {
        toggleState: setOppositeVisibilityDropdown,
        setFalse: hideDropdown,
    }] = useBooleanState(false);

    useKeyboardNavigation({
        listRef: dropdownStackRef,
        orientation: ORIENTATIONS.horizontal,
    });

    useKeyboardNavigation({
        listRef: crumbsStackRef,
        orientation: ORIENTATIONS.horizontal,
    });

    useEffect(() => {
        if (!dropdownVisibility) { return; }
        const firstCrumb = Array.from(dropdownStackRef.current?.children ?? [])[0];
        if (!firstCrumb) { return; }
        (firstCrumb as HTMLElement)?.focus();
    }, [dropdownVisibility, dropdownStackRef]);

    // HANDLERS
    const ellipsisClickHandler: MouseEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
        setOppositeVisibilityDropdown();
    };

    const dropdownKeysHandler: KeyboardEventHandler<HTMLDivElement> = (event) => {
        if (event.key === 'Escape') {
            hideDropdown();
            breadcrumbButtonRef.current?.focus();
        }
    };

    return {
        breadcrumbButtonRef,
        dropdownStackRef,
        crumbsStackRef,

        dropdownVisibility,
        hideDropdown,

        ellipsisClickHandler,
        dropdownKeysHandler,
    };
};
