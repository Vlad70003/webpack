import {Configuration} from "mini-css-extract-plugin";

export function buildResolves(): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}