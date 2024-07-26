/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All Rights Reserved.
 * See 'LICENSE' in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

export enum TelemetryEventNames {
    Build = "build",
    Clean = "clean",
    CleanRebuild = "cleanRebuild",
    CMakeDebugger = "cmakeDebugger",
    CMakeExecutableNotFound = "CMakeExecutableNotFound",
    CMakeFileOpen = "cmakeFileOpen",
    CMakeFileWrite = "cmakeFileWrite",
    ConfigChangedAutoSelectActiveFolder = "configChanged.autoSelectActiveFolder",
    ConfigChangedOptions = "configChanged.options",
    Configure = "configure",
    Debug = "debug",
    DeleteCacheAndReconfigure = "deleteCacheAndReconfigure",
    DeleteCacheAndReconfigureWithDebugger = "deleteCacheAndReconfigureWithDebugger",
    EditCMakeCache = "editCMakeCache",
    Install = "install",
    KitSelection = "kitSelection",
    Launch = "launch",
    LogDiagnostics = "logDiagnostics",
    MissingCMakeListsFile = "missingCMakeListsFile",
    OpenLogFile = "openLogFile",
    PartialActivation = "partialActivation",
    QuickStart = "quickStart",
    ResetExtension = "resetExtension",
    RunCPack = "runCPack",
    RunTests = "runTests",
    RunWorkflow = "runWorkflow",
    SelectActiveFolder = "selectActiveFolder",
    Settings = "settings",
    Substitution = "substitution",
    Task = "task",
    VariantSelection = "variantSelection",
}
