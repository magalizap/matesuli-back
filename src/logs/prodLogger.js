import winston from "winston";

const levelOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5
    },
    colors: {
        fatal: 'red',
        error: 'magenta',
        warning: 'yellow',
        info: 'blue',
        http: 'white',
        debug: 'green'
    }
}

export const prodLogger = () => {
    return winston.createLogger({
    levels: levelOptions.levels,
    transports: [
        new winston.transports.Console({level: 'info', 
            format: winston.format.combine(
                winston.format.colorize({colors: levelOptions.colors}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({filename: './error.log', level: 'error',
            format: winston.format.combine(
                winston.format.colorize({ colors: levelOptions.colors }),
                winston.format.simple()
            )
        })
    ]
})}