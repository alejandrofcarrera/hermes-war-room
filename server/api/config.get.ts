export default defineEventHandler(() => {
  return {
    missionsEnabled: process.env.WAR_ROOM_MISSIONS_ENABLED !== 'false',
    defaultDisabled: process.env.WAR_ROOM_DEFAULT_DISABLED === 'true'
  }
})
