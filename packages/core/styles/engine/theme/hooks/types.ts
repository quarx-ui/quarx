import { ClassNameList, NoStrictEntityMods } from '@bem-react/classname';

export interface TypedCnFormatter<Key extends string> {
    (elemName: Key): string;
    (elemName: Key, elemMix?: ClassNameList): string;
    (elemName: Key, elemMods?: NoStrictEntityMods | null, elemMix?: ClassNameList): string;
}
