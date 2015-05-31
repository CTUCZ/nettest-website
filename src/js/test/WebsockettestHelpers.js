//polyfill for microsecond-time
//https://gist.github.com/paulirish/5438650
(function() {
    if (!Date.now) {
        Date.now = function() {
            return new Date().getTime();
        }
    }

// prepare base perf object
    if (typeof window.performance === 'undefined') {
        window.performance = {};
    }

    if (!window.performance.now || window.performance.now === undefined) {
        var nowOffset = Date.now();

        if (performance.timing && performance.timing.navigationStart) {
            nowOffset = performance.timing.navigationStart;
        }


        window.performance.now = function now() {
            return Date.now() - nowOffset;
        }

    }
   

})();

function nowNs() {
    return Math.round(window.performance.now() * 1000 * 1000); //from ms to ns
};
    


//Cyclic Barrier (Java: http://docs.oracle.com/javase/7/docs/api/java/util/concurrent/CyclicBarrier.html )
var CyclicBarrier = (function() {
    "use strict"
    var _parties;
    var _callbacks = new Array();

    /**
     * Creates a new cyclic barrier
     * @param {Integer} parties the number of threads that must invoke await() 
     *      before the barrier is tripped
     */
    function CyclicBarrier(parties) {
        _parties = parties;
    }

    /**
     * Waits until all parties have invoked await on this barrier
     * The current context is disabled in any case.
     * 
     * As soon as all threads have called 'await', all callbacks will
     * be executed
     * @param {Function} callback
     */
    CyclicBarrier.prototype.await = function(callback) {
        _callbacks.push(callback);
        if (_callbacks.length === _parties) {
            release();
        }
    }

    function release() {
        //first, copy and clear callbacks
        //to prohibit that a callback registers before all others are released
        var tmp = _callbacks.slice();
        _callbacks = new Array();
        
        for (var i = 0; i < _parties; i++) {
            //prevent side effects in last function that called "await"
            window.setTimeout(tmp[i],1);
        }
    };

    return CyclicBarrier;
})();

/**
 * Finds the median number in the given array
 * http://caseyjustus.com/finding-the-median-of-an-array-with-javascript
 * @param {Array} values
 * @returns {Number} the median
 */
Math.median = function(values) {

    values.sort(function(a, b) {
        return a - b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2)
        return values[half];
    else
        return (values[half - 1] + values[half]) / 2.0;
}