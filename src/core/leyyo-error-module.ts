import {leyyo, LeyyoCoreModule, Module} from "@leyyo/core";
import {Fqn} from "@leyyo/fqn";
import {LY_INT_FQN} from "../internal";
import {ErrorAssign} from "./error-assign";

@Module(LeyyoCoreModule, ErrorAssign)
@Fqn(...LY_INT_FQN)
export class LeyyoErrorModule {

}
export const $error = leyyo.error;