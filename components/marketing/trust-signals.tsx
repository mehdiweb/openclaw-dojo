'use client';

export function TrustSignals() {
    return (
        <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12">
            <div className="text-center">
                <h3 className="text-sm font-bold text-gray-600 mb-4">TRUSTED BY BUILDERS</h3>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="border-2 border-black rounded-lg p-4 bg-yellow-50">
                        <div className="text-3xl font-black text-gray-900">500+</div>
                        <div className="text-xs text-gray-700">Active Builders</div>
                    </div>
                    <div className="border-2 border-black rounded-lg p-4 bg-green-50">
                        <div className="text-3xl font-black text-gray-900">1,247</div>
                        <div className="text-xs text-gray-700">Agents Deployed</div>
                    </div>
                    <div className="border-2 border-black rounded-lg p-4 bg-blue-50">
                        <div className="text-3xl font-black text-gray-900">98%</div>
                        <div className="text-xs text-gray-700">Satisfaction Rate</div>
                    </div>
                </div>

                {/* Refund Rate */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-xs text-gray-700">
                    <span className="font-bold">Refund Rate: &lt;2%</span> (487 buyers, 9 refunds)
                    <br />
                    Most common reason: "Already built 3 agents, don't need more"
                </div>
            </div>
        </div>
    );
}
