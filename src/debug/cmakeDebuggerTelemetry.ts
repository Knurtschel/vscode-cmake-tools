import * as telemetry from "@cmt/telemetry/telemetry";
import { TelemetryEventNames } from "@cmt/telemetry/telemetryEvents";

export enum DebugOrigin {
    originatedFromLaunchConfiguration = "launchConfiguration",
    originatedFromCommand = "command"
}

export function logCMakeDebuggerTelemetry(origin: string, debugType: string) {
    telemetry.logEvent(TelemetryEventNames.CMakeDebugger, {
        origin,
        debugType
    });
}
