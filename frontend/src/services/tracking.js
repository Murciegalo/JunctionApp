import _axios from 'services/axios'

const TrackingService = {}

TrackingService.subscribe = (
    email,
    startedApplication,
    completedApplication,
) => {
    return _axios.post('/tracking', {
        email,
        startedApplication,
        completedApplication,
    })
}

export default TrackingService

// "89b2e802-5e80-4ba6-a2da-6452265d470c"
