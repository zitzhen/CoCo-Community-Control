<template>
<header class="header_safe">
    <div class="container_safe">
        <h1 class="h1_safe"> ZIT-CoCo-Community</h1>
    </div>
</header>

<div class="container_safe">
    <div class="page-header_safe">
        <div class="icon_safe">
            <i class="fas fa-shield-alt"></i>
        </div>
        <h2>安全漏洞告中心</h2>
        <p class="page-description_safe">
            我们非常重视产品的安全性。如果您发现了任何安全漏洞或潜在风险，请通过此页面提交报告。
            我们的安全团队会认真审查每一个提交，并在确认后尽快修复问题。
        </p>

        <div class="content-grid_safe">
            <div class="main-content_safe">
                <div class="alert-error_safe">
                    <strong><i class="fas fa-exclamation-triangle"></i> 通道临时关闭通知：</strong>
                    通道临时关闭，请提交到侧边的联系方式。
                </div>

                <div class="alert-warning_safe">
                    <strong><i class="fas fa-exclamation-triangle"></i> 重要提示：</strong>
                    请不要在公开场合讨论未修复的安全漏洞。请使用此表单私下报告安全问题。
                </div>

                <form id="vulnerabilityForm">
                    <div class="form-group_safe">
                        <label for="reporterName" class="form-label_safe">您的姓名/昵称</label>
                        <input type="text" id="reporterName" class="form-control_safe" required />
                    </div>

                    <div class="form-group_safe">
                        <label for="reporterEmail" class="form-label_safe">联系邮箱</label>
                        <input type="email" id="reporterEmail" class="form-control_safe" required />
                    </div>

                    <div class="form-group_safe">
                        <label for="affectedComponent" class="form-label_safe">受影响的组件/功能</label>
                        <input type="text" id="affectedComponent" class="form-control_safe" required
                            placeholder="例如: 文件上传功能、用户认证系统等" />
                    </div>

                    <div class="form-group_safe">
                        <label class="form-label_safe">漏洞严重程度</label>
                        <div class="severity-select_safe">
                            <div class="severity-option_safe critical_safe">
                                <input type="radio" id="severity-critical" name="severity" value="critical" required />
                                <label for="severity-critical">严重</label>
                            </div>
                            <div class="severity-option_safe high_safe">
                                <input type="radio" id="severity-high" name="severity" value="high" />
                                <label for="severity-high">高危</label>
                            </div>
                            <div class="severity-option_safe medium_safe">
                                <input type="radio" id="severity-medium" name="severity" value="medium" />
                                <label for="severity-medium">中危</label>
                            </div>
                            <div class="severity-option_safe low_safe">
                                <input type="radio" id="severity-low" name="severity" value="low" />
                                <label for="severity-low">低危</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group_safe">
                        <label for="vulnerabilityDesc" class="form-label_safe">漏洞详细描述</label>
                        <textarea id="vulnerabilityDesc" class="form-control_safe" required
                                placeholder="请详细描述漏洞的发现过程、利用方式以及可能造成的影响"></textarea>
                    </div>

                    <div class="form-group_safe">
                        <label for="reproduceSteps" class="form-label_safe">重现步骤</label>
                        <textarea id="reproduceSteps" class="form-control_safe" required
                                placeholder="1. 第一步操作...
2. 第二步操作...
3. 观察到的结果..."></textarea>
                    </div>

                    <div class="form-group_safe">
                        <label for="additionalInfo" class="form-label_safe">附加信息</label>
                        <textarea id="additionalInfo" class="form-control_safe"
                                placeholder="任何其他有助于我们理解问题的信息（可选）"></textarea>
                    </div>

                    <div class="form-group_safe">
                        <button type="submit" class="btn_safe btn-block_safe">
                            <i class="fas fa-paper-plane"></i> 提交漏洞报告
                        </button>
                        <p style="color: red;">此提交通道暂时关闭，请提交到右边的联系方式</p>
                    </div>
                </form>
            </div>

            <div class="sidebar_safe">
                <div class="card_safe">
                    <h3 class="section-title_safe">
                        <i class="fas fa-bullhorn"></i> 安全公告
                    </h3>
                    <ul class="disclosure-list_safe">
                        <li class="disclosure-item_safe">
                            <div class="disclosure-title_safe">
                                <i class="fas fa-check-circle" style="color: var(--success-color);"></i>
                                Github
                                <span class="disclosure-date_safe">2025-05-19</span>
                            </div>
                            <div class="disclosure-description_safe">
                                修复了一个意外通过Github无法访问作品的BUG
                            </div>
                        </li>
                        <li class="disclosure-item_safe">
                            <div class="disclosure-title_safe">
                                <i class="fas fa-exclamation-triangle" style="color: var(--error-color);"></i>
                                无法访问
                                <span class="disclosure-date_safe">2025-09-24</span>
                            </div>
                            <div class="disclosure-description_safe">
                                我们正在调查一个可能影响用户访问的问题。更多信息将在确认后公布。
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="card_safe">
                    <h3 class="section-title_safe">
                        <i class="fas fa-gift"></i> 漏洞奖励计划
                    </h3>
                    <div class="alert-info_safe">
                        <strong><i class="fas fa-award"></i> 我们感谢您的贡献！</strong>
                        对于高质量的安全漏洞报告，我们可能会提供奖励或公开致谢。
                    </div>
                    <p>奖励标准包括但不限于：</p>
                    <ul>
                        <li>漏洞的严重程度</li>
                        <li>报告的清晰度和完整性</li>
                        <li>漏洞的潜在影响范围</li>
                    </ul>
                </div>

                <div class="card_safe">
                    <h3 class="section-title_safe">
                        <i class="fas fa-envelope"></i> 联系我们
                    </h3>
                    <div class="contact-info_safe">
                        <div class="contact-method_safe">
                            <i class="fas fa-envelope"></i>
                            <span>coco-community-security-center@zit.email</span>
                        </div>
                        <div class="contact-method_safe">
                            <i class="fas fa-comment-alt"></i>
                            <span>Signal: +86 181 3824 7313 </span>
                        </div>
                        <div class="contact-method_safe">
                            <i class="fas fa-comment-alt"></i>
                            <span>Wechat: hi_liu-xiaozhen</span>
                        </div>
                        <div class="contact-method_safe">
                            <i class="fas fa-comment-alt"></i>
                            <span>QQ:1967237096</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<footer class="footer_safe">
    <div class="container_safe">
        <p>&#169; 2025 ZIT-CoCo-Community | 安全部门</p>
    </div>
</footer>
</template>

<style>
@import '@/assets/style/safe/style.css';
</style>