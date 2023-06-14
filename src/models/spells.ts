
 export type SpellsResponse ={
    id: string,
    name: string,
    description: string,
 }
 
 export const normalizeSpells = (input:SpellsResponse ) => ({
    actor:input?.id || '',
    alive:input?.name || '',
    ancestry:input?.description || '',
    
 })
 
 export type Spell = ReturnType<typeof normalizeSpells>
 