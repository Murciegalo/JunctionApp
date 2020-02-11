import { forOwn } from 'lodash-es'

const settings = {
    CLOUDINARY_CLOUD_NAME: {
        value: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        required: true,
    },
    AUTH0_DOMAIN: {
        value: process.env.REACT_APP_AUTH0_DOMAIN,
        required: true,
    },
    AUTH0_CLIENT_ID: {
        value: process.env.REACT_APP_AUTH0_CLIENT_ID,
        required: true,
    },
    ID_TOKEN_NAMESPACE: {
        value:
            process.env.REACT_APP_ID_TOKEN_NAMESPACE ||
            'https://app.hackjunction.com/',
        required: true,
    },
    BASE_URL: {
        value: process.env.REACT_APP_BASE_URL,
        required: true,
    },
    FACEBOOK_PIXEL_ID: {
        value: process.env.REACT_APP_FACEBOOK_PIXEL_ID,
        required: false,
    },
    GOOGLE_ANALYTICS_ID: {
        value: process.env.REACT_APP_GOOGLE_ANALYTICS_ID,
        required: false,
    },
    LOGROCKET_ID: {
        value: process.env.REACT_APP_LOGROCKET_ID,
        required: false,
    },
    IS_DEBUG: {
        value: process.env.IS_DEBUG,
        default: process.env.NODE_ENV === 'development',
        required: true,
    },
    PLATFORM_OWNER_NAME: {
        value: process.env.REACT_APP_PLATFORM_OWNER_NAME || 'Junction',
        required: true,
    },
    PLATFORM_OWNER_WEBSITE: {
        value:
            process.env.REACT_APP_PLATFORM_OWNER_WEBSITE ||
            'https://hackjunction.com',
        required: true,
    },
    SEO_PAGE_TITLE: {
        value:
            process.env.REACT_APP_SEO_PAGE_TITLE ||
            'Experience Europe’s Leading Hackathon',
        required: true,
    },
    SEO_PAGE_DESCRIPTION: {
        value:
            process.env.REACT_APP_SEO_PAGE_DESCRIPTION ||
            'Organized in the Helsinki Area, Finland, Junction is a meeting place for thousands of developers, designers, and entrepreneurs. A weekend-long experience, gathering tech enthusiasts from all over the world to create with the latest technology in a unique environment and atmosphere.',
        required: true,
    },
    SEO_IMAGE_URL: {
        value:
            process.env.REACT_APP_SEO_IMAGE_URL ||
            'https://res.cloudinary.com/hackjunction/image/upload/c_fill,g_center,h_630,w_1200/rqn6uonv2nuzmkyanrqj',
        required: false,
    },
    SEO_TWITTER_HANDLE: {
        value: process.env.REACT_APP_SEO_TWITTER_HANDLE || '@hackJunction',
        required: false,
    },
    PRIVACY_URL: {
        value:
            process.env.REACT_APP_PRIVACY_URL ||
            'https://hackjunction.com/privacy',
        required: false,
    },
    TERMS_URL: {
        value:
            process.env.REACT_APP_TERMS_URL || 'https://hackjunction.com/terms',
        required: false,
    },
    CALENDAR_URL: {
        value:
            process.env.REACT_APP_CALENDAR_URL ||
            'https://hackjunction.com/calendar',
        required: false,
    },
}

const buildConfig = () => {
    const config = {}
    forOwn(settings, (obj, key) => {
        if (!obj.value) {
            if (typeof obj.default !== 'undefined') {
                config[key] = obj.default
            } else {
                if (obj.required) {
                    throw new Error(
                        `Invalid configuration: ${key} must be provided a value from .env, or a default value. See config.js`
                    )
                }
            }
        } else {
            config[key] = obj.value
        }
    })

    return config
}

const config = buildConfig()

export default config
