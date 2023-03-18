export class AsyncBindingBehavior {
    public bind(binding, _scope, callbackFn) {
        console.log("behavior");
        binding.originalupdateTarget = binding.updateTarget;

        binding.updateTarget = async a => {
            const d = await a;
            binding.originalupdateTarget(d);

            if (_.isFunction(callbackFn)) {
                callbackFn();
            }
        };
    }

    public unbind(binding) {
        binding.updateTarget = binding.originalupdateTarget;
        binding.originalupdateTarget = null;
    }
}