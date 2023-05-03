export default function getModelMap(models, select) {
    return models.find(({ modelName, modalImage }) => modelName === select)
}