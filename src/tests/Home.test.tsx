import React from "react";
import { render } from "@testing-library/react";

import Navbar from '../components/home/Navbar';

describe("Home Navbar works properly", () => {
    const { container } = render(<Navbar />)
    const SOCIALS_NUMBER = 4;
    const SOCIALS_LENGTH_OF_CHILDREN: number[] = new Array(SOCIALS_NUMBER).fill(1, 0, SOCIALS_NUMBER)
    const SOCIALS_TYPES_OF_CHILDREN: 'SVGR-URL'[] = new Array(SOCIALS_NUMBER).fill('SVGR-URL', 0, SOCIALS_NUMBER);

    test("Social links and svgs render correctly", (): void => {
        const [...socialsSVGs] = container.getElementsByTagName('a');
        expect(socialsSVGs.length).toBe(SOCIALS_NUMBER)
        expect(socialsSVGs.map(currSvg => currSvg.children.length)).toEqual(SOCIALS_LENGTH_OF_CHILDREN)
        expect(socialsSVGs.map(currSvg => currSvg.children[0].tagName)).toEqual(SOCIALS_TYPES_OF_CHILDREN)
    });
})

