import {leyyo, FuncLike} from "@leyyo/core";
import {$fqn} from "@leyyo/fqn";
import {LY_INT_FQN} from "../internal";

/**
 * Adds an error to pool
 * */
export function ErrorAssign(): ClassDecorator {
    return (clazz: FuncLike) => {
        const described = leyyo.reflect.described(_deco, clazz);
        leyyo.error.add(clazz);
        _deco.assign(described, {});
    };
}
$fqn.deco(ErrorAssign, ...LY_INT_FQN);
const _deco = leyyo.deco.addDecorator(ErrorAssign, {clazz: true});
