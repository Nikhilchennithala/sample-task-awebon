import { ThemePalette } from "@angular/material";

export interface Rating {
    name: string;
    color: ThemePalette;
    subRating?: Rating[];
}
