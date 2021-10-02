<template>
    <div class="form-header">
        <i class="line-v"></i>
        <span class="content">
            <slot></slot>
        </span>
    </div>
</template>
<style lang="scss" scoped>
.form-header{
    width: 100%;
    text-align: left;
    padding-left: 32px;
    font-size: 16px;
    font-weight: bold;
    .line-v{
        display: inline-block;
        margin-right: 8px;
        height: 1em;
        vertical-align: middle;
        width: 4px;
        border-radius: 2px;
        background-color:  $rd;
    }
    .content{
        vertical-align: middle;
    }
}
</style>